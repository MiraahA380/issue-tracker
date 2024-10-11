import {Badge} from "@radix-ui/themes";
import {IssueStatus} from "@prisma/client";

const statusMap: Record<IssueStatus, { label: string, color: 'red' | 'violet' | 'green' }> = {
    OPEN: {label: 'Open', color: "red"},
    IN_PROGRESS: {label: 'In progress', color: "violet"},
    CLOSED: {label: 'Closed', color: "green"},
}


const IssueStatusBadge = ({status}: { status: IssueStatus }) => {
    return (<div>
        <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </div>);
}

export default IssueStatusBadge;