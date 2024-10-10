import {z} from "zod";

export const CreateIssueSchema = z.object({
    title: z.string()
        .min(1, {message: 'Title is required'})
        .max(255),
    description: z.string().min(1, {message: 'Description is required'}),
});
