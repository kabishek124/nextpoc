async function SsrPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();

    console.log(result,"result");
    

    return (
        <div>
            {result.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                </div>
            ))}
        </div>
    );
}

export default SsrPage;