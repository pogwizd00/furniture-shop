import React, {FC, useEffect} from 'react';
import {UserDto} from "../../types/UserDto";
import {getUser, getUserToUpdate, updateUser} from "./api";
import {Stack, Paper, Button, Modal, TextInput, PasswordInput} from '@mantine/core';
import {useForm} from "@mantine/form";
import {CreateUserDto} from "../../types/createUserDto";
import { useNavigate} from "react-router-dom";
import {updateErrorNotification, updateSuccessfulNotification} from "./notifications";


interface MeFormProps {
}

export const getCookieName = (cname: string) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const MeForm: FC<MeFormProps> = () => {

    const navigate = useNavigate();

    const id = getCookieName('user-id');
    const [user, setUser] = React.useState<UserDto>();
    const [updateUserData, setUpdateUserData] = React.useState<CreateUserDto>()
    const [opened, setOpened] =  React.useState(false);


    const form = useForm<CreateUserDto>({
        initialValues: {
            firstName:'',
            lastName:'',
            email: '',
            password: '',
        },
    })

    useEffect(() => {
        getUser(id).then((data) => {
            setUser(data);
        });
    }, []);

    useEffect(()=>{
        getUserToUpdate(id).then((data)=> {
            setUpdateUserData(data)
            form.setValues({firstName:data.firstName,lastName: data.lastName,email: data.email});
        });
    },[])

    const handleOnUpdate = async (user: CreateUserDto) =>{
        try{
            console.log(user);
            await updateUser(id,user);
            updateSuccessfulNotification();
            navigate('/products');
        }catch (error){
            updateErrorNotification()
        }
    }

    return (
        <div>
            <Modal
                centered
                onClose={()=>setOpened(false)}
                opened={ opened }
                title={"Update your data :D"}
            >
                <form onSubmit={form.onSubmit(values => handleOnUpdate(values))}>
                    <Stack spacing={"md"}>
                        <TextInput withAsterisk label={"First Name:"} placeholder="Your name" {...form.getInputProps('firstName')} />
                        <TextInput withAsterisk label={"Last Name:"} placeholder="Your last name" {...form.getInputProps('lastName')} />
                        <TextInput withAsterisk label={"Email:"} required type={"email"} placeholder="Email" {...form.getInputProps('email')} />
                        <PasswordInput withAsterisk label={"Password:"} mt="md" placeholder="Password" {...form.getInputProps('password')} />
                        <Button type={"submit"} style={{marginTop:'2vh', backgroundColor:'#F2A56A'}}>
                            Update
                        </Button>
                    </Stack>
                </form>
            </Modal>
            <Stack style={{marginTop: '2vh'}} align="center" sx={(theme) => ({
                height: 300
            })}>
                <Paper shadow="lg" radius="md" p="xl" withBorder>
                    <Paper style={{marginBottom:'2vh', backgroundColor:'#FFF4E6'}} shadow="lg" radius="md" p="xs"><h2>Me:</h2></Paper>
                   <span><span style={{fontWeight:'bold'}}>First Name:</span> {user?.firstName}</span><br/>
                    <span><span style={{fontWeight:'bold'}}>Last Name:</span> {user?.lastName}</span><br/>
                    <span><span style={{fontWeight:'bold'}}>Email:</span> {user?.email}</span><br/>
                    <Button onClick={()=>setOpened(true)} style={{marginTop:'2vh' ,backgroundColor:'#F2A56A', color:'black'}}  uppercase>
                        Update
                    </Button>
                </Paper>
            </Stack>
        </div>
    );
};