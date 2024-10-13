import {NextRequest, NextResponse} from "next/server";
import {IssueSchema} from "@/app/schemas";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";

export async function PATCH(
    request: NextRequest,
    {params}: { params: { id: string } }
) {

    const body = await request.json();

    const validation = IssueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400})
    }

    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    });


    if (!issue)
        return notFound();

    const updatedIssue = await prisma.issue.update({
        where: {id: issue!.id},
        data: {
            title: body.title,
            description: body.description
        }
    });

    return NextResponse.json(updatedIssue);

}