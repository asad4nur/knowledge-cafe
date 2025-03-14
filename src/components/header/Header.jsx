import profile from"../../assets/profile.png"
const Header = () => {
    return (
        <div className="font-bold text-3xl p-10 flex justify-between border-b-2 max-w-7xl mx-auto">
            <h2>Knowledge Cafe</h2>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;