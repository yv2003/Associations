import User from "../models/User.js";
import Profile from "../models/Profile.js";
import bcrypt from 'bcrypt';
export const createUser = async (req, res) => {
    try {
        const { name, email, password, createdAt, bio, age, phoneNumber, address } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create user
        const createUser = await User.create({ name, email, password: hashedPassword, createdAt });
        console.log("createuser id::", createUser.id)
        if (createUser) {
            const createProfile = await Profile.create({
                bio, age, phoneNumber, address, userId: createUser.id
            });
            // console.log()
            // res.json(createProfile);
            return res.json({ user: createUser, profile: createProfile });
        }
        res.status(400).json({ error: "User creation failed" });
        // res.json(createUser);

    } catch (e) {
        console.log("Error in create:::", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const fetchUserById = async (req, res) => {
    try {
        const fetch = await User.findByPk(req.params.id, {
            //include:[{model:Profile}]
            include: Profile
        });
        // console.log(req.params.id);
        if (!fetch) console.log("User doesnot exist")
        //console.log("fetch:::",fetch);
        res.json(fetch);
    }
    catch (e) {
        console.log("Error in fetch:::", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//profile apis:::::::
export const updateProfile = async (req, res) => {
    const id = req.params.id;
    const {  age, bio, phoneNumber, address } = req.body;
    try {
        const field = await Profile.findByPk(id);
        if (field) {
            field.age = age;
            field.bio = bio;
            field.phoneNumber = phoneNumber;
            field.address = address;
            await field.save();
            res.json(field);
        } else {
            res.status(404).json({ error: 'Field not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//a user adds order to their cart


// PRODUCTS:::,one to many
// export const userOrder = async (req, res) => {
//     const {}
//     try {
//         const userorder = await User.create({
//         where: {
//             id: req.params.id,
//             order:req.params.order
//     }
// })
// } catch (e) {
//     res.status(500).json({message:"not working "})
// }
// }




