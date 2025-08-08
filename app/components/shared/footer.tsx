export const Footer = () => {
    return (
        <div className="bg-[#8D493A] pt-24 pb-6">
            <h4 className="text-2xl text-center text-[#F8EDE3] font-medium pb-10">Troscan</h4>
            <div className="md:flex grid justify-center md:gap-28 gap-7">
                <ul className="text-[#F8EDE3] md:text-3xl text-2xl font-medium text-center">
                    <li className="text-[15px] text-[#F8EDE3B3]">Sitemap</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <ul className="text-[#F8EDE3] md:text-3xl text-2xl font-medium text-center">
                    <li className="text-[15px] text-[#F8EDE3B3]">Socials</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                    <li>Twitter</li>
                </ul>
                <ul className="text-[#F8EDE3] md:text-3xl text-2xl font-medium text-center">
                    <li className="text-[15px] text-[#F8EDE3B3]">More</li>
                    <li>Lisence</li>
                    <li>Grainient</li>
                    <li>Inspirux</li>
                    <li>Store</li>
                </ul>
            </div>
            <hr className="border-r-2 border-[#F8EDE3B3] mt-20 mb-7 mx-14"/>
            <p className="text-[#F8EDE3B3] text-center">@2025, All Rights Reserved</p>
        </div>
    )
};