import { useState, useContext, useEffect, useMemo } from 'react';
import * as S from './styles';
import { CompanyContext } from '../../contexts/CompanyContext';
import { useNode } from '../../contexts/NodeContext';
import { getCompanyAssets, getCompanyLocations } from '../../services/queries/Company';
import { useQuery } from 'react-query';
import { Asset } from '../../types/Assets';
import { Location } from '../../types/Locations';
import { buildTree, filterTree } from '../../utils/BuildTree';
import component from '../../assets/component.png';
import asset from '../../assets/asset.png';
import location from '../../assets/location.png';
import { Filter } from '../filter';
import { TreeItem, TreeImage, ExpandIcon } from './styles';
import { AiFillThunderbolt, AiOutlineAlert } from 'react-icons/ai';

export function SideBar() {
    const companyContext = useContext(CompanyContext);
    const { selectedNode, setSelectedNode } = useNode();
    const companyId = companyContext?.company?.id || '';

    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
    const [filteredTree, setFilteredTree] = useState<(Location | Asset)[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setSelectedNode(null);
        setSearchTerm(''); // Reset search term on company change
    }, [companyId, setSelectedNode]);

    const fetchCompaniesLocations = useQuery<Location[]>(['locations', companyId], () => getCompanyLocations(companyId), { enabled: companyId.length > 0 });
    const fetchCompaniesAssets = useQuery<Asset[]>(['assets', companyId], () => getCompanyAssets(companyId), { enabled: companyId.length > 0 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const locations = fetchCompaniesLocations.data || [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const assets = fetchCompaniesAssets.data || [];

    const tree = useMemo(() => buildTree(locations, assets), [locations, assets]);

    useEffect(() => {
        if (searchTerm) {
            const { filteredNodes, expandedNodeIds } = filterTree(tree, searchTerm);
            setFilteredTree(filteredNodes);
            setExpandedNodes(expandedNodeIds);
        } else {
            setFilteredTree(tree);
            setExpandedNodes(new Set());
        }
    }, [searchTerm, tree]);

    const handleNodeClick = (node: Location | Asset) => {
        if ('sensorType' in node && node['sensorType'] !== null) {
            setSelectedNode(node);
        }
    };

    const handleToggleExpand = (nodeId: string) => {
        setExpandedNodes(prevExpandedNodes => {
            const newExpandedNodes = new Set(prevExpandedNodes);
            if (newExpandedNodes.has(nodeId)) {
                newExpandedNodes.delete(nodeId);
            } else {
                newExpandedNodes.add(nodeId);
            }
            return newExpandedNodes;
        });
    };

    const renderTree = (nodes: (Location | Asset)[]): JSX.Element[] => {
        return nodes.map(node => {
            const image = 'locationId' in node ? ('sensorType' in node && node['sensorType'] !== null ? component : asset) : location;
            const isExpanded = expandedNodes.has(node.id);
            const isSelected = selectedNode && selectedNode.id === node.id;
    
            let statusIcon = null;

            if ('status' in node) {
            const status = (node as Asset).status;

            switch (status) {
                case 'operating':
                statusIcon = <AiFillThunderbolt style={{ marginLeft: 8 }} />;
                break;
                case 'alert':
                statusIcon = <AiOutlineAlert style={{ marginLeft: 8 }} />;
                break;
                default:
                statusIcon = null;
                break;
            }
            }
    
            return (
                <div key={node.id}>
                    <TreeItem
                        isSelected={isSelected ? isSelected : false}
                        onClick={() => {
                            handleNodeClick(node);
                            if (node.children && node.children.length > 0) {
                                handleToggleExpand(node.id);
                            }
                        }}
                    >
                        <TreeImage src={image} alt={node.name} />
                        {node.name}
                        {statusIcon}
                        {node.children && node.children.length > 0 && (
                            <ExpandIcon>{isExpanded ? '-' : '+'}</ExpandIcon>
                        )}
                    </TreeItem>
    
                    {isExpanded && node.children && node.children.length > 0 && (
                        <div style={{ marginLeft: 20 }}>
                            {renderTree(node.children)}
                        </div>
                    )}
                </div>
            );
        });
    };    

    return (
        <S.Container>
            <Filter data={tree} onSearch={setSearchTerm} searchTerm={searchTerm} />
            <div style={{ overflowY: 'auto' }}>
                {renderTree(filteredTree)}
            </div>
        </S.Container>
    );
}