import { Button } from "@mui/material";

type ParentProps = {
    data: any[]
    removeItem: (id: number) => void
}

const DataDisplay = (props: ParentProps) => {
    const { data, removeItem } = props;
    return (
        <div>
            {data.map((item, id) => (
                <div key={item}>
                    {item}
                    <Button
                        variant="text"
                        onClick={() => removeItem(id)}
                        startIcon="X"
                    />
                </div>))}
        </div>
    )
}

export default DataDisplay;
