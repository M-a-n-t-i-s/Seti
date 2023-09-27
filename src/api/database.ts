 const TableValues = [
    createData('Mark', 'Minsk'),
    createData('Tom', 'Minsk'),
    createData('Alex', 'Minsk'),
    createData('Edgar', 'Perm'),
    createData('Semen', 'Moscow'),
    createData('Ivan', 'Perm'),
    createData('Billy', 'Sochi'),
    createData('Platon', 'Moscow'),
    createData('Victor', 'Moscow'),
    createData('Albert', 'Moscow'),
];

function createData(
    name: string,
    city: string,

) {
    return { name, city};
}
export default TableValues
