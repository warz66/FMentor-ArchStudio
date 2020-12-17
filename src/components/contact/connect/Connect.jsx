import './Connect.css';

const Connect = () => {

    return (
        <section id="connect">
            <h2>Connect with us</h2>
            <form action="" method="post" id="connect-form">
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="email" placeholder="Email"/>
                <textarea name="message" placeholder="Message" rows="3"/>
            </form>
        </section>
    );
}

export default Connect;