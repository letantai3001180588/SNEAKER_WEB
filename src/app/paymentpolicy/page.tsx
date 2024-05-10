import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
     <Breadcrumb
        pageName="Payment Policy"
      />
    <section
      className="mx-auto max-w-4xl"
    >
      <div className="container">
      <div className="px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Hình thức thanh toán</h2>
      <ul className="list-disc list-inside">
        <li>Thanh toán trực tiếp khi nhận hàng (COD).</li>
        <li>Thanh toán chuyển khoản ngân hàng.</li>
        <li>Thanh toán qua ví điện tử Momo, ZaloPay.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Hướng dẫn thanh toán</h2>
      <ul className="list-disc list-inside">
        <li>**Thanh toán trực tiếp khi nhận hàng (COD):** Khách hàng thanh toán cho nhân viên giao hàng khi nhận hàng.</li>
        <li>**Thanh toán chuyển khoản ngân hàng:** Khách hàng chuyển khoản vào tài khoản ngân hàng của cửa hàng.</li>
        <li>**Thanh toán qua ví điện tử Momo, ZaloPay:** Khách hàng thanh toán bằng cách quét mã QR của cửa hàng.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Lưu ý</h2>
      <ul className="list-disc list-inside">
        <li>Cửa hàng chỉ xác nhận đơn hàng sau khi nhận được thanh toán của khách hàng.</li>
        <li>Khách hàng vui lòng thanh toán đúng số tiền và ghi rõ nội dung thanh toán.</li>
      </ul>
    </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
