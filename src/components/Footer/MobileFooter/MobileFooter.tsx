import { useIntl } from "react-intl";
import {
    DescriptionDesc,
    DescriptionTile,
    DescriptionTileDesc,
    MenuFooterSection,
    MenuSection,
    MenuText,
    MenuTitle,
    SectionTitleBox,
    SectionWraper,
    SocialBox,
    SocialIcon,
    SocialSection,
    SocialTitle,
} from "./StyleMobileFooter";
import messages from "../messages";

const MobileFooter = () => {
    const { formatMessage } = useIntl();

    const menu = [
        {
            title: "My Account",
            subMenus: [
                {
                    text: "Create A Store ",
                },
                {
                    text: "List An Item For Sale",
                },
                {
                    text: "My Profile",
                },
            ],
        },
        {
            title: "Need Help?",
            subMenus: [
                {
                    text: "Help And Support ",
                },
                {
                    text: "FAQ",
                },
                {
                    text: "Contact Us",
                },
                {
                    text: "Premium Services",
                },
            ],
        },
        {
            title: "Buy An Item",
            subMenus: [
                {
                    text: "Browse Digital Items",
                },
                {
                    text: "Browse Stores",
                },
                {
                    text: "Where To Buy NFTs",
                },
                {
                    text: "Discover",
                },
                {
                    text: "Vote/DAO",
                },
            ],
        },
    ];
    return (
        <SectionWraper>
            <SectionTitleBox>
                <DescriptionTile>
                    {formatMessage({ ...messages.NFT_MARKETPLACE })}
                </DescriptionTile>
                <DescriptionTileDesc>
                    {formatMessage({ ...messages.NFTMP })}
                </DescriptionTileDesc>
                <DescriptionDesc>
                    {formatMessage({ ...messages.NFT_FOOTER_DESC })}
                    <br />
                    <br />
                    {formatMessage({ ...messages.EMAIL_NFT_FOOTER })}
                </DescriptionDesc>
            </SectionTitleBox>
            <SocialSection>
                <SocialTitle>
                    {formatMessage({ ...messages.JOIN_COMMUNITY })}
                </SocialTitle>
                <SocialBox>
                    <SocialIcon>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="470"
                                height="956"
                                transform="translate(-32 -340)"
                                fill="transparent"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 3C9.5556 3 9.2496 3.0102 8.2896 3.054C7.3314 3.0978 6.6768 3.2502 6.1044 3.4728C5.5044 3.6984 4.9602 4.0524 4.5102 4.5108C4.05253 4.96028 3.69831 5.5041 3.4722 6.1044C3.2508 6.6768 3.0978 7.332 3.054 8.2902C3.0108 9.2496 3 9.555 3 12C3 14.445 3.0102 14.7504 3.054 15.7104C3.0978 16.6686 3.2502 17.3232 3.4728 17.8956C3.6984 18.4956 4.0524 19.0398 4.5108 19.4898C4.96029 19.9475 5.50411 20.3017 6.1044 20.5278C6.6768 20.7498 7.3314 20.9022 8.2896 20.946C9.2496 20.9898 9.5556 21 12 21C14.4444 21 14.7504 20.9898 15.7104 20.946C16.6686 20.9022 17.3232 20.7498 17.8956 20.5272C18.4956 20.3016 19.0398 19.9476 19.4898 19.4892C19.9475 19.0397 20.3017 18.4959 20.5278 17.8956C20.7498 17.3232 20.9022 16.6686 20.946 15.7104C20.9898 14.7504 21 14.4444 21 12C21 9.5556 20.9898 9.2496 20.946 8.2896C20.9022 7.3314 20.7498 6.6768 20.5272 6.1044C20.3012 5.50384 19.947 4.95979 19.4892 4.5102C19.0397 4.05253 18.4959 3.69831 17.8956 3.4722C17.3232 3.2508 16.668 3.0978 15.7098 3.054C14.7504 3.0108 14.445 3 12 3ZM12 4.6218C14.403 4.6218 14.688 4.6308 15.6372 4.674C16.5144 4.7142 16.9908 4.86 17.3082 4.9842C17.7282 5.1468 18.0282 5.3424 18.3432 5.6568C18.6582 5.9718 18.8532 6.2718 19.0158 6.6918C19.1394 7.0092 19.2858 7.4856 19.326 8.3628C19.3692 9.312 19.3782 9.597 19.3782 12C19.3782 14.403 19.3692 14.688 19.326 15.6372C19.2858 16.5144 19.14 16.9908 19.0158 17.3082C18.8718 17.6991 18.6419 18.0528 18.3432 18.3432C18.0528 18.642 17.6992 18.8718 17.3082 19.0158C16.9908 19.1394 16.5144 19.2858 15.6372 19.326C14.688 19.3692 14.4036 19.3782 12 19.3782C9.5964 19.3782 9.312 19.3692 8.3628 19.326C7.4856 19.2858 7.0092 19.14 6.6918 19.0158C6.30087 18.8718 5.9472 18.6419 5.6568 18.3432C5.35811 18.0528 5.12828 17.6991 4.9842 17.3082C4.8606 16.9908 4.7142 16.5144 4.674 15.6372C4.6308 14.688 4.6218 14.403 4.6218 12C4.6218 9.597 4.6308 9.312 4.674 8.3628C4.7142 7.4856 4.86 7.0092 4.9842 6.6918C5.1468 6.2718 5.3424 5.9718 5.6568 5.6568C5.94716 5.35803 6.30085 5.12819 6.6918 4.9842C7.0092 4.8606 7.4856 4.7142 8.3628 4.674C9.312 4.6308 9.597 4.6218 12 4.6218Z"
                                fill="black"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 15.003C11.6056 15.003 11.2151 14.9253 10.8508 14.7744C10.4865 14.6235 10.1554 14.4023 9.87656 14.1234C9.5977 13.8446 9.3765 13.5135 9.22559 13.1492C9.07467 12.7849 8.997 12.3944 8.997 12C8.997 11.6056 9.07467 11.2151 9.22559 10.8508C9.3765 10.4865 9.5977 10.1554 9.87656 9.87656C10.1554 9.59771 10.4865 9.37651 10.8508 9.22559C11.2151 9.07468 11.6056 8.997 12 8.997C12.7964 8.997 13.5603 9.31339 14.1234 9.87656C14.6866 10.4397 15.003 11.2036 15.003 12C15.003 12.7964 14.6866 13.5603 14.1234 14.1234C13.5603 14.6866 12.7964 15.003 12 15.003ZM12 7.374C10.7731 7.374 9.59647 7.86138 8.72892 8.72893C7.86138 9.59647 7.374 10.7731 7.374 12C7.374 13.2269 7.86138 14.4035 8.72892 15.2711C9.59647 16.1386 10.7731 16.626 12 16.626C13.2269 16.626 14.4035 16.1386 15.2711 15.2711C16.1386 14.4035 16.626 13.2269 16.626 12C16.626 10.7731 16.1386 9.59647 15.2711 8.72893C14.4035 7.86138 13.2269 7.374 12 7.374ZM17.9718 7.29C17.9718 7.58002 17.8566 7.85815 17.6515 8.06322C17.4464 8.2683 17.1683 8.3835 16.8783 8.3835C16.5883 8.3835 16.3101 8.2683 16.1051 8.06322C15.9 7.85815 15.7848 7.58002 15.7848 7.29C15.7848 6.99999 15.9 6.72185 16.1051 6.51678C16.3101 6.31171 16.5883 6.1965 16.8783 6.1965C17.1683 6.1965 17.4464 6.31171 17.6515 6.51678C17.8566 6.72185 17.9718 6.99999 17.9718 7.29Z"
                                fill="black"
                            />
                        </svg>
                    </SocialIcon>
                    <SocialIcon>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="inherent"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9.3225 6.64421C8.44712 7.00831 6.69759 7.76191 4.0739 8.905C3.64786 9.07443 3.42468 9.24017 3.40436 9.40224C3.37002 9.67614 3.71302 9.78399 4.18009 9.93086C4.24362 9.95083 4.30945 9.97153 4.37694 9.99347C4.83646 10.1428 5.4546 10.3176 5.77595 10.3245C6.06744 10.3308 6.39278 10.2107 6.75196 9.96402C9.20335 8.30926 10.4688 7.47287 10.5482 7.45484C10.6043 7.44212 10.6819 7.42612 10.7346 7.4729C10.7872 7.51967 10.782 7.60825 10.7764 7.63201C10.7425 7.77687 9.39608 9.02858 8.69933 9.67635C8.48211 9.87829 8.32804 10.0215 8.29654 10.0542C8.22599 10.1275 8.15408 10.1968 8.08497 10.2635C7.65806 10.675 7.33792 10.9836 8.10269 11.4876C8.47021 11.7298 8.76429 11.9301 9.05768 12.1299C9.3781 12.3481 9.69769 12.5657 10.1112 12.8368C10.2165 12.9058 10.3172 12.9776 10.4151 13.0474C10.788 13.3132 11.123 13.5521 11.5369 13.514C11.7774 13.4919 12.0258 13.2657 12.152 12.5913C12.4501 10.9974 13.0362 7.54385 13.1716 6.12074C13.1835 5.99606 13.1686 5.83649 13.1566 5.76644C13.1446 5.69639 13.1196 5.59659 13.0285 5.52271C12.9207 5.43521 12.7542 5.41676 12.6798 5.41807C12.3412 5.42403 11.8219 5.60462 9.3225 6.64421Z"
                                fill="inherent"
                            />
                        </svg>
                    </SocialIcon>

                    <SocialIcon>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="inherent"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.9644 5.94005C14.9735 6.07228 14.9735 6.20452 14.9735 6.33798C14.9735 10.4044 11.8778 15.0942 6.21725 15.0942V15.0918C4.54509 15.0942 2.90768 14.6152 1.5 13.7121C1.74314 13.7414 1.98751 13.756 2.23248 13.7566C3.61822 13.7578 4.96435 13.2929 6.05454 12.4367C4.73766 12.4117 3.58288 11.5531 3.17946 10.2996C3.64077 10.3886 4.11609 10.3703 4.56886 10.2466C3.13315 9.9565 2.10024 8.69507 2.10024 7.23011C2.10024 7.21671 2.10024 7.20391 2.10024 7.19111C2.52803 7.42938 3.00701 7.56162 3.49695 7.57624C2.14473 6.67253 1.72791 4.87362 2.54449 3.46716C4.10695 5.38977 6.41225 6.55857 8.88696 6.68228C8.63894 5.61342 8.97776 4.49337 9.77727 3.742C11.0168 2.57685 12.9662 2.63657 14.1313 3.87545C14.8205 3.73956 15.4811 3.48667 16.0856 3.12835C15.8559 3.84072 15.3751 4.44584 14.7328 4.83036C15.3428 4.75845 15.9388 4.59514 16.5 4.3459C16.0868 4.96503 15.5664 5.50434 14.9644 5.94005Z"
                                fill="inherent"
                            />
                        </svg>
                    </SocialIcon>
                    <SocialIcon>
                        <svg
                            width="21"
                            height="18"
                            viewBox="0 0 21 18"
                            fill="inherent"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.5425 0.290527C4.98481 0.290527 0.461879 4.16285 0.459919 8.92182C0.458613 10.4437 0.92371 11.929 1.80556 13.2372L0.375 17.7099L5.72035 16.5097C7.20723 17.2011 8.86052 17.5617 10.5385 17.5607H10.5425C16.1001 17.5607 20.623 13.6878 20.625 8.92879C20.6263 6.62362 19.5785 4.45375 17.6744 2.82272C15.7709 1.19111 13.2396 0.291108 10.5425 0.290527ZM10.5425 16.1027H10.5392C9.03547 16.1027 7.56048 15.7566 6.27363 15.1028L5.96661 14.9472L2.79585 15.659L3.64244 13.0113L3.4432 12.7401C2.60636 11.6056 2.16088 10.2784 2.16157 8.92182C2.16353 4.96588 5.9235 1.74853 10.5457 1.74853C12.7837 1.74911 14.8877 2.4964 16.4705 3.85221C18.0532 5.20801 18.924 7.01092 18.9227 8.92821C18.9207 12.8841 15.1614 16.1027 10.5418 16.1027H10.5425ZM15.1392 10.7288C14.8871 10.6214 13.6485 10.0994 13.4173 10.0268C13.1867 9.95537 13.0188 9.91821 12.851 10.1342C12.6837 10.3502 12.2003 10.8362 12.054 10.9796C11.9064 11.1236 11.7594 11.141 11.5073 11.0336C11.2551 10.9256 10.4432 10.698 9.48162 9.96292C8.73237 9.39156 8.22677 8.6855 8.0798 8.46891C7.93282 8.2535 8.06412 8.13679 8.19019 8.02937C8.3032 7.93356 8.44234 7.77795 8.56776 7.65195C8.69318 7.52595 8.73498 7.43595 8.8199 7.29195C8.90352 7.14853 8.86171 7.02195 8.79835 6.91453C8.73498 6.80595 8.232 5.74453 8.02101 5.31311C7.8172 4.89272 7.60948 4.94904 7.45466 4.94208C7.30769 4.93627 7.14046 4.93453 6.97127 4.93453C6.8047 4.93453 6.531 4.98853 6.29976 5.20453C6.06917 5.42053 5.4179 5.94195 5.4179 7.00337C5.4179 8.06537 6.32066 9.09079 6.44673 9.23479C6.57281 9.37821 8.22351 11.5574 10.7508 12.4922C11.3518 12.7134 11.8208 12.8464 12.1873 12.9463C12.7909 13.1106 13.3402 13.0868 13.774 13.0316C14.2574 12.9695 15.2646 12.5102 15.4737 12.0068C15.684 11.5034 15.684 11.0714 15.6213 10.9814C15.5599 10.8914 15.3914 10.8374 15.1392 10.7288Z"
                                fill="inherent"
                            />
                        </svg>
                    </SocialIcon>
                </SocialBox>
            </SocialSection>
            <MenuFooterSection>
                {menu.map((value, index) => {
                    return (
                        <MenuSection key={index}>
                            <MenuTitle>{value.title}</MenuTitle>
                            {value.subMenus.map((value, index) => (
                                <MenuText key={index}>{value.text}</MenuText>
                            ))}
                        </MenuSection>
                    );
                })}
            </MenuFooterSection>
        </SectionWraper>
    );
};
export default MobileFooter;
