import React from "react";

// Typage des props du composant
interface ButtonHeadsComponentProps {
  titleh1: string;
  ButtonMoreAction?: React.ComponentType;
  ButtonImport?: React.ComponentType;
  ButtonExport?: React.ComponentType;
  ButtonPopUp?: React.ComponentType;
  ButtonAdd?: React.ComponentType;
  ButtonToggleState?: React.ComponentType;
  addProduct?: React.ComponentType;
  addContent?: React.ComponentType;
  addCustomer?: React.ComponentType;
  createOrders?: React.ComponentType;
  createDrafts?: React.ComponentType;
  createInventory?: React.ComponentType;
  createPurchase?: React.ComponentType;
  createTransfers?: React.ComponentType;
  createGift?: React.ComponentType;
}

const ButtonHeadsComponent: React.FC<ButtonHeadsComponentProps> = ({
  titleh1,
  ButtonMoreAction,
  ButtonImport,
  ButtonExport,
  ButtonPopUp,
  ButtonToggleState,
  addProduct,
  addContent,
  addCustomer,
  createOrders,
  createDrafts,
  createInventory,
  createPurchase,
  createTransfers,
  createGift,
  ButtonAdd,
}) => {

  // Mappage des titres avec les boutons d'ajout ou de création
  const buttonMapping: { [key: string]: React.ComponentType | undefined } = {
    product: addProduct,
    content: addContent,
    customer: addCustomer,
    orders: createOrders,
    drafts: createDrafts,
    inventory: createInventory,
    purchase: createPurchase,
    transfers: createTransfers,
    gift: createGift,
  };

  // Récupération du bouton associé au titre (par défaut null si pas de correspondance)
  const ButtonAddOrCreate = buttonMapping[titleh1.toLowerCase()] || null;

  return (
    <>
      <div className=" md:content-center mb-4 content-center sm:content-center ">
        <div className="justify-between flex md:content-center items-center sm:item-center">
          <h1 className="text-xl font-bold">{titleh1}</h1>
          {ButtonPopUp && ButtonExport &&
            <div className="button-item flex ">
              {/* La div est togglée selon l'état expanded, elle est cachée lorsqu'on clique à l'extérieur */}
              <div className={``}>
                {ButtonPopUp && <ButtonPopUp />}
              </div>

              <div className=" content-center md:hidden lg:hidden 2xl:hidden">
                {/* Le bouton qui toggle l'état */}
                {ButtonToggleState && <ButtonToggleState />}
              </div>

              <div className="hidden md:block lg:block 2xl:block">
                <span className="export ">{ButtonExport && <ButtonExport />}</span>
                <span className="import ">{ButtonImport && <ButtonImport />}</span>
                <span className="more_action ">
                  {ButtonMoreAction && <ButtonMoreAction />}
                </span>
              </div>

              <div className="add_product">
                {/* Affichage du bouton "add" ou "create" selon le titleh1 */}
                {ButtonAddOrCreate && <ButtonAddOrCreate />}
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ButtonHeadsComponent;
