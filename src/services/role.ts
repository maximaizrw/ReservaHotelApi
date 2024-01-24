import { Optional } from "sequelize/types";
import { RoleModel } from "../models/role";
import { Role } from "../interfaces/role.interface";

const insertRole = async (role: Optional<any, string>) => {
    const responseInsert = await RoleModel.create(role);
    return responseInsert;
}

const getRole = async (id: string) => {
    const responseGet = await RoleModel.findByPk(id);
    return responseGet;
}

const getRoles = async () => {
    const responseGet = await RoleModel.findAll();
    return responseGet;
}

const updateRole = async (id: string, data: Role) => {
    const responseUpdate = await RoleModel.update(data, {
        where: { id: id }
    });
    return responseUpdate;
}

const deleteRole = async (id: string) => {
    const responseDelete = await RoleModel.destroy({
        where: { id: id }
    });
    return responseDelete;
}

export { insertRole, getRole, getRoles, updateRole, deleteRole };