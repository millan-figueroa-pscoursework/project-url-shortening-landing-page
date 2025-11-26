export default function Footer() {
  return (
    <div className="bg-gray-900 text-slate-200 flex items-center justify-between py-6 px-12 ">
      <img src="/images/logo.svg" alt="" />
      <ul>
        <h3>Features</h3>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul>
        <h3>Resources</h3>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <h3>Company</h3>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
