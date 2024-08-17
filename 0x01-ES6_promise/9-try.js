export default function guardrail(mathFunction) {
    const queue = [];
    let result;
    try {
        result = mathFunction();
    }catch (error){
        result = `Error: ${error.message}`;
    }
    queue.push(result);
    return queue;
}