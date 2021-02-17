

export const parseUrlQueries = (str: string) => {
    if (str.includes('?')) return str.split('?')[1].split('&').map(item => {return { name: item.split('=')[0], value: item.split('=')[1] }})
}
