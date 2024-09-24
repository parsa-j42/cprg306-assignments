interface StudentInfoProps {
    studentName: string;
    githubRepoId: string;
}

export default function StudentInfo({studentName, githubRepoId}: StudentInfoProps) {
    return (
        <div>
            <h1 className={"text-3xl font-semibold mb-3"}>Student Information</h1>
            <p>Student Name: {studentName}</p>
            <p>Github Repo: <a href={`https://github.com/${githubRepoId}`}>{githubRepoId}</a></p>
        </div>
    );
}
