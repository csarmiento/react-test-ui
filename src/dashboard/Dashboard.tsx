import { Card, CardContent, CardHeader } from "@mui/material";
import MonthlyRevenue from "./MonthlyRevenue";
import OrderChart from "./OrderChart";
import { OrderStatus } from "../types";
import ABarChart from "./ABarChart";

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const orderedStatus: OrderStatus = "ordered";
const orders = [
    { "id": 1, "status": orderedStatus, basket: [{ "product_id": 1, "quantity": 10 }], "date": new Date("2023-02-05"), "total": 1000 },
    { "id": 2, "status": orderedStatus, basket: [{ "product_id": 1, "quantity": 10 }], "date": new Date("2023-02-03"), "total": 1200 },
    { "id": 3, "status": orderedStatus, basket: [{ "product_id": 1, "quantity": 10 }], "date": new Date("2023-01-18"), "total": 1400 }
];

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

export const Dashboard = () => (
    <>
        <Card sx={{
            padding: '20px',
            marginTop: 2,
            marginBottom: '1em',
        }}>
            <CardHeader title="Basis Unified Data and Analytics" />
            <CardContent>
                Basis Unified Data and Analytics (aka BUDA) is the internal name for the future-state data and analytics platform at Basis.
                It unifies advertising data from sellers, buyers, and ad servers into a single source of truth, so clients can understand their business, make better decisions about optimization and testing, and find new insights on how to do things better.
                Clients can worry about their business without worrying about data, because Basis will have helped them make sense of that so they can make better and timely decisions about their advertising.
            </CardContent>
        </Card>
        <div style={styles.flex}>
            <div style={styles.leftCol}>
                <div style={styles.flex}>
                    <MonthlyRevenue value={"$ 152.000"} />
                </div>
                <div style={styles.singleCol}>
                    <OrderChart orders={orders} />
                </div>
                <div style={styles.singleCol}>
                </div>
            </div>
            <div style={styles.rightCol}>
                <div style={styles.flex}>
                    <ABarChart></ABarChart>
                </div>
            </div>
        </div>
    </>
);
