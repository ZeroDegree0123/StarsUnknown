'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface StarForm {
    name: string
    description: string
    distance: string
    size: string
    type: string
    contellation: string
    planets: string
}

const NewStarPage = () => {
    return (
        <div>NewStarPage</div>
    )
}

export default NewStarPage