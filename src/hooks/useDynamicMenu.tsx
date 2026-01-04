import { useContext } from 'react';
import { DynamicMenuContext } from 'contexts/DynamicMenuContext';

export const useDynamicMenu = () => {
    const context = useContext(DynamicMenuContext);
    if (!context) {
        throw new Error('useDynamicMenu must be used within a DynamicMenuProvider');
    }
    return context;
};

