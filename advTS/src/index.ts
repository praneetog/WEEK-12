interface User {
    id: number;
    name: string;
    age: string;
    email: string;
    password: string;
    createdAt: Date;
}

// This can only update `name` and `email` properties from `User`
type UpdateProfile = Pick<User, 'name' | 'email' | 'age'>;

// This code is used when we only want to update any one or two of them and not all
type UpdateProfileOptional = Partial<UpdateProfile>

// Function that accepts a UserProfile type
const updateUser = (updatedProps: UpdateProfileOptional) => {
  //Hit DB to update users
};

updateUser({
    name: "Praneet"
})