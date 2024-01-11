import axios from 'axios';

export const fetchUsers = async () => {
    try {
        const response = await axios.get("http://localhost:3000/users");
        const sortedUsers = response.data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return sortedUsers;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const fetchModules = async () => {
    try {
        const response = await axios.get("http://localhost:3000/modules");
        const sortedModules = response.data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return sortedModules;
    } catch (error) {
        console.error("Error fetching modules:", error);
        throw error;
    }
};

export const fetchEmpresas = async () => {
    try {
        const response = await axios.get("http://localhost:3000/empresas");
        const sortedEmpresas = response.data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return sortedEmpresas;
    } catch (error) {
        console.error("Error fetching empresas:", error);
        throw error;
    }
};

export const fetchPages = async () => {
    try {
        const response = await axios.get("http://localhost:3000/pages");
        const sortedPages = response.data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return sortedPages;
    } catch (error) {
        console.error("Error fetching pages:", error);
        throw error;
    }
};

export const fetchCurrentPage = async (page_id) => {
    try {
        const pages = await fetchPages();
    
        const page = pages.find(page => page.id === page_id);
    
        if (!page) {
            throw new Error(`page with id ${page_id} not found.`);
        }
        
        return { page };
    } catch (error) {
        console.error("Error fetching Current Page:", error);
        throw error;
    }
}

export const fetchCurrentUser = async () => {
    try {
        const users = await fetchUsers();
        const modules = await fetchModules();
        const empresas = await fetchEmpresas();

        const user = users.find(user => user.id === 1);

        const moduledefault_id = user.moduledefault_id;
        const module = modules.find(module => module.id === moduledefault_id);

        const empresa_id = user.empresa_id;
        const empresa = empresas.find(empresa => empresa.id === empresa_id);

        return { user, module: module, empresa: empresa };
    } catch (error) {
        console.error("Error fetching Current User:", error);
        throw error;
    }
}