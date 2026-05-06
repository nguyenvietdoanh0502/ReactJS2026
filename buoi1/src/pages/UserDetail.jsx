import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserDetail() {
    const navigate = useNavigate();
    function HandleBack(){
        navigate("/users")
    }
    const {id} = useParams();
    const url = `${import.meta.env.VITE_API_BASE_URL}/users/${id}`;
    const {data, loading, error} = useFetch(
        url,
    );
    if(loading) return <p>Đang tải...</p>
    if(error) return <p>Lỗi: {error}</p>

    return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <button
          onClick={HandleBack}
          className="mb-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
      <h1 className="mb-6 text-2xl font-bold text-slate-900">Chi tiết người dùng</h1>

      <div className="space-y-2 text-slate-700">
        <p><strong>ID:</strong> {data?.id}</p>
        <p><strong>Tên:</strong> {data?.name}</p>
        <p><strong>Username:</strong> {data?.username}</p>
        <p><strong>Email:</strong> {data?.email}</p>
        <p><strong>Phone:</strong> {data?.phone}</p>
        <p><strong>Website:</strong> {data?.website}</p>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Address</h2>
        <div className="space-y-2 text-slate-700">
          <p><strong>Street:</strong> {data?.address?.street}</p>
          <p><strong>Suite:</strong> {data?.address?.suite}</p>
          <p><strong>City:</strong> {data?.address?.city}</p>
          <p><strong>Zipcode:</strong> {data?.address?.zipcode}</p>
          <p><strong>Geo Lat:</strong> {data?.address?.geo?.lat}</p>
          <p><strong>Geo Lng:</strong> {data?.address?.geo?.lng}</p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Company</h2>
        <div className="space-y-2 text-slate-700">
          <p><strong>Name:</strong> {data?.company?.name}</p>
          <p><strong>Catch Phrase:</strong> {data?.company?.catchPhrase}</p>
          <p><strong>BS:</strong> {data?.company?.bs}</p>
        </div>
      </div>
    </section>
  );
}

export default UserDetail;


