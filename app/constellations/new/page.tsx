import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

import schema from './schema';

interface ConstellationForm {
    name: string;
    description: string;
    distance: number;
    stars: string;
}

const NewConstellationPage = () => {
    const { register } = useForm<ConstellationForm>();

    return (
        <>
            <form onSubmit={() => console.log("hello")}>
                <input type="text" name='name' />
                <input type="text" name='description' />
                <input type="text" name='distance' />
                <input type="text" name="stars" />
            </form>
            <button type='submit'>Submit</button>
        </>
    )
}

export default NewConstellationPage