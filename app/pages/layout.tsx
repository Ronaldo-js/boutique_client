import "../globals.css";
export default function DashboardLayouts({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // classe-name : "section-container-product"
    return(<section className="section-container-base">
            <section className="section-heads-container">  
              {children}
              <p>je suis le Dashboard Layout.tsx Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, pariatur laborum aspernatur ut magni quia numquam consequuntur cupiditate ab. Odio est libero eligendi hic, suscipit sit ea aperiam illo voluptate.</p>
            </section>
          </section>
    )
}