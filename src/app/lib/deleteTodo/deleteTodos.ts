export default async function  deleteTodo() {
    try {
        const res = await fetch("/todos");
    } catch (error) {
        if(error instanceof Error) {
            console.log(error.message);
        }

        return [];
    }
}