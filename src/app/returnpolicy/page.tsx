import Breadcrumb from "@/components/Common/Breadcrumb";
const Blog = () => {
  return (
    <>
     <Breadcrumb
        pageName="Return Policy"
      />
    <section
      className="mx-auto max-w-4xl"
    >
      <div className="container">
      <div className="px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Điều kiện chung</h2>
      <ul className="list-disc list-inside">
        <li>Sản phẩm còn nguyên vẹn, chưa qua sử dụng, không có dấu hiệu hư hỏng, trầy xước.</li>
        <li>Sản phẩm còn đầy đủ phụ kiện đi kèm (hộp, tem mác, phiếu bảo hành,...).</li>
        <li>Khách hàng có hóa đơn mua hàng hoặc biên lai thanh toán.</li>
        <li>Thời gian đổi trả trong vòng 7 ngày kể từ ngày nhận hàng (có thể thay đổi tùy theo cửa hàng).</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Trường hợp được đổi trả</h2>
      <ul className="list-disc list-inside">
        <li>Sản phẩm bị lỗi do nhà sản xuất (lỗi size, rách, hư mốc,...).</li>
        <li>Sản phẩm bị hư hỏng do quá trình vận chuyển của cửa hàng.</li>
        <li>Giao hàng không đúng mẫu mã, không đúng size hoặc khác loại mà khách đã đặt.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Trường hợp không được đổi trả</h2>
      <ul className="list-disc list-inside">
        <li>Sản phẩm đã qua sử dụng, có dấu hiệu hư hỏng, trầy xước.</li>
        <li>Sản phẩm không còn đầy đủ phụ kiện đi kèm.</li>
        <li>Khách hàng không có hóa đơn mua hàng hoặc biên lai thanh toán.</li>
        <li>Quá thời gian đổi trả quy định của cửa hàng.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Quy trình đổi trả</h2>
      <ol className="list-decimal list-inside">
        <li>Khách hàng liên hệ với cửa hàng qua điện thoại, email hoặc website để thông báo về việc muốn đổi trả sản phẩm.</li>
        <li>Cửa hàng sẽ hướng dẫn khách hàng cách thức đổi trả sản phẩm.</li>
        <li>Khách hàng gửi sản phẩm về cửa hàng theo hướng dẫn.</li>
        <li>Cửa hàng kiểm tra sản phẩm và tiến hành đổi trả hoặc hoàn tiền cho khách hàng.</li>
      </ol>

      <h2 className="text-xl font-bold mb-4">Lưu ý</h2>
      <ul className="list-disc list-inside">
        <li>Mỗi cửa hàng có thể có chính sách đổi trả riêng, khách hàng nên liên hệ trực tiếp với cửa hàng để biết chính xác thông tin.</li>
        <li>Khách hàng nên kiểm tra kỹ sản phẩm trước khi thanh toán để tránh trường hợp đổi trả sau này.</li>
      </ul>
    </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
