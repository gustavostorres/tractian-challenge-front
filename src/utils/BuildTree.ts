import { Asset } from "../types/Assets";
import { Location } from "../types/Locations"

export const buildTree = (locations: Location[], assets: Asset[]): Location[] => {
    const locationMap = new Map<string, Location>(locations.map(loc => [loc.id, { ...loc, children: [] }]));

    const tree: Location[] = [];

    locations.forEach(loc => {
        if (loc.parentId) {
            const parent = locationMap.get(loc.parentId);
            if (parent) {
                parent.children!.push(locationMap.get(loc.id)!);
            }
        } else {
            tree.push(locationMap.get(loc.id)!);
        }
    });

    assets.forEach(asset => {
        if (asset.locationId) {
            const location = locationMap.get(asset.locationId);
            if (location) {
                location.children!.push({
                    ...asset,
                    children: []
                } as Asset);
            }
        }
    });

    return tree;
};

export const filterTree = (
    nodes: (Location | Asset)[],
    search: string
  ): { filteredNodes: (Location | Asset)[], expandedNodeIds: Set<string> } => {
    const searchLower = search.toLowerCase();
  
    const filterNode = (node: Location | Asset): boolean => {
      const isMatch = node.name.toLowerCase().includes(searchLower);
      if (isMatch) return true;
  
      const filteredChildren = 'children' in node && node.children
        ? node.children.some(child => filterNode(child))
        : false;
  
      return isMatch || filteredChildren;
    };
  
    const buildFilteredTree = (
      nodes: (Location | Asset)[],
      expandedNodeIds: Set<string>
    ): { filteredNodes: (Location | Asset)[], expandedNodeIds: Set<string> } => {
      const result: { filteredNodes: (Location | Asset)[], expandedNodeIds: Set<string> } = {
        filteredNodes: [],
        expandedNodeIds
      };
  
      nodes.forEach(node => {
        const filteredChildren = 'children' in node && node.children
          ? buildFilteredTree(node.children, expandedNodeIds).filteredNodes
          : [];
  
        const isMatch = filterNode(node);
  
        if (isMatch) {
          result.filteredNodes.push({
            ...node,
            children: filteredChildren,
          } as Location | Asset);
          if ('children' in node && node.children && node.children.length > 0) {
            result.expandedNodeIds.add(node.id);
          }
        } else if ('children' in node && node.children && filteredChildren.length > 0) {
          result.filteredNodes.push({
            ...node,
            children: filteredChildren,
          } as Location | Asset);
          result.expandedNodeIds.add(node.id);
        }
      });
  
      return result;
    };
  
    return buildFilteredTree(nodes, new Set());
  };  