import DashboardLayout from "../Layouts/DashboardLayout";
function Dashboard (){

        const getValues = JSON.parse(localStorage.getItem('user'));
        console.log(getValues);
    return (
        <DashboardLayout>
            <div className="container-dashboard">
            <h1>Welcome: {getValues.name} </h1>
            <aside>
                <div>
                <span>{getValues.email}</span>
                </div>
                <ul>
                    <li>Adjekota Alfred</li>

                </ul>
            </aside>
            </div>
        </DashboardLayout>

    )
}
export default Dashboard;