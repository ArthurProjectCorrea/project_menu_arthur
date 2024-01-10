import axios from 'axios';

export const fetchUsers = async () => {
    try {
        const response = await axios.get("http://localhost:3000/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const fetchModules = async () => {
    try {
        const response = await axios.get("http://localhost:3000/modules");
        return response.data;
    } catch (error) {
        console.error("Error fetching modules:", error);
        throw error;
    }
};

export const fetchPages = async () => {
    try {
        const response = await axios.get("http://localhost:3000/pages");

        return response.data;
    } catch (error) {
        console.error("Error fetching pages:", error);
        throw error;
    }
};

export const fetchCurrentUser = async () => {
    try {
        const users = await fetchUsers();
        const modules = await fetchModules();

        const user = users.find(user => user.id === 1);

        const moduledefault_id = user.moduledefault_id;
        const module = modules.find(module => module.id === moduledefault_id);

        return { user, module: module };
    } catch (error) {
        console.error("Error fetching Current User:", error);
        throw error;
    }
}