import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';



const CreateTodo = () => {
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data,e) => {
        data.id=uuidv4();
        console.log(data);
        e.target.reset();            
    }


    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Task</label>
            <input type="text" name="task" ref={
                register({
                    required:{value:true, message:"campo obligarorio"}
                })
            }/>
            <div>
            {errors?.name?.message}
            </div>
            <label>Student</label>
            <input type="text" name="student" ref={
                register({
                    required:{value:true, message:"campo obligarorio"}
                })
            }/>
            <div>
            {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
     );

}
 
export default CreateTodo;