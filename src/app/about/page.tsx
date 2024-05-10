import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
      />
      <section
        className="mx-auto max-w"
      >
        <div className="container">
          <div className="py-8">
            <h2 className="text-xl font-bold mb-4">Giới thiệu</h2>
            <p className="text-lg">
              Cửa hàng bán giày Sneaker được thành lập vào năm 2024 với mục tiêu cung cấp cho khách hàng những đôi giày chất lượng cao với giá cả hợp lý. Chúng tôi cam kết mang đến cho khách hàng trải nghiệm mua sắm tốt nhất thông qua dịch vụ khách hàng chu đáo và chuyên nghiệp.
            </p>

            <h2 className="text-xl font-bold mb-4">Sứ mệnh</h2>
            <p className="text-lg">
              Sứ mệnh của Sneaker là trở thành thương hiệu bán lẻ giày dép hàng đầu Việt Nam. Chúng tôi luôn nỗ lực để cung cấp cho khách hàng những sản phẩm chất lượng cao nhất với giá cả cạnh tranh nhất.
            </p>

            <h2 className="text-xl font-bold mb-4">Giá trị cốt lõi</h2>
            <ul className="list-disc list-inside">
              <li>Chất lượng:</li>
              <li>Giá cả:</li>
              <li>Dịch vụ:</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Đội ngũ</h2>
            <p className="text-lg">
              Sneaker sở hữu đội ngũ nhân viên chuyên nghiệp, nhiệt tình và giàu kinh nghiệm. Chúng tôi luôn sẵn sàng hỗ trợ khách hàng lựa chọn những đôi giày phù hợp nhất với nhu cầu của mình.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
