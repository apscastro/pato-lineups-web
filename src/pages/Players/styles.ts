
export const styles = {
    tableContainer: {
        margin: '20px',
        overflowX: 'auto',
        borderRadius:"30px",
        boxShadow:"1px 1px 5px rgba(0, 0, 0, 0.5)", 
    },
    table: {
        minWidth: '650px',
        '@media (max-width: 600px)': {
            minWidth: '100%', 
            fontSize: '12px',
        },
    },
    tableCell: {
        height:"50px",
        fontSize: '16px',
        '@media (max-width: 600px)': {
            fontSize: '12px',
        },
    },
}