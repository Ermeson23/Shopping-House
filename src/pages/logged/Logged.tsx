export default function LoggedArea() {

    interface UserData {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    const data: UserData = {
        id: 2,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: 'https://reqres.in/img/faces/2-image.jpg'
    };

    return (
        <div>
            <h2>Área Logada</h2>
            <div>
                <p>ID: {data.id}</p>
                <p>Email: {data.email}</p>
                <p>Primeiro Nome: {data.first_name}</p>
                <p>Último Nome: {data.last_name}</p>
                <img src={data.avatar} alt="Avatar" />
            </div>
        </div>
    );
}
