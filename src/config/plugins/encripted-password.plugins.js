import bcrypt from 'bcrypt'

export const encriptedPassword = async (password ) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
    // const hash = await bcrypt.hash(password, salt);
    // return hash;
}