export function getQuantifierNode(quantifierNode) {
    let { min, max, isLazy } = quantifierNode;
    max = max === -1 ? '无穷' : max;
    min = min === -1 ? 0 : min;
    return `${isLazy ? '非贪婪的' : '贪婪的'}匹配${min}到${max}次`;
}