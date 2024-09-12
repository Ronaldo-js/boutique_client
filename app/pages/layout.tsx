import "../globals.css";
export default function DashboardLayouts({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    return <section className="section-container-product">
          {/* <p>je suis le Dashboard Layout.tsx Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, pariatur laborum aspernatur ut magni quia numquam consequuntur cupiditate ab. Odio est libero eligendi hic, suscipit sit ea aperiam illo voluptate.</p> */}
          {children}
        </section>
}