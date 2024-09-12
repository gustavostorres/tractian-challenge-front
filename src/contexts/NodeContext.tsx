import { createContext, useContext, useState, ReactNode } from 'react';
import { Asset } from '../types/Assets';
import { Location } from '../types/Locations';

interface NodeState {
    selectedNode: Asset | Location | null;
    setSelectedNode: (node: Asset | Location | null) => void;
}

const initialNodeState: NodeState = {
    selectedNode: null,
    setSelectedNode: () => {}
};

export const NodeContext = createContext<NodeState>(initialNodeState);

export const useNode = () => {
    return useContext(NodeContext);
};

export const NodeProvider = ({ children }: { children: ReactNode }) => {
    const [selectedNode, setSelectedNode] = useState<Asset | Location | null>(null);

    return (
        <NodeContext.Provider value={{ selectedNode, setSelectedNode }}>
            {children}
        </NodeContext.Provider>
    );
};
