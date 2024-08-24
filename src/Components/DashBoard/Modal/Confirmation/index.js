import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../../Card/Button";

export default function MyModal({
  openModal,
  closeModal,
  isOpen,
  selectedProduct,
  deleteProduct,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex justify-center">
                  {selectedProduct && (
                    <div className="flex flex-col p-3 ">

                      <h1 className="text-2xl text-center ">
                        
                      </h1>
                      <h5>Are you sure u want delete <strong className="text-[#e274a9]">{selectedProduct.name}</strong></h5>
                      <div className="flex flex-row space-x-2">
                        <Button
                          txt={"Cancel"}
                          style={
                            "w-full bg-[#e274a9] text-[#ffffff] hover:text-[#e274a9] hover:bg-[#ffffff] border-2 border-[#e274a9] rounded-md duration-500 font-semibold"
                          }
                          onClick={closeModal}
                        />

                        <Button
                          txt={"Delete"}
                          style={
                            "w-full bg-[#ffffff] text-[#e274a9] hover:text-[#ffffff] hover:bg-[#e274a9] border-2 border-[#e274a9] rounded-md duration-500 font-semibold"
                          }
                          onClick={() => deleteProduct(selectedProduct.id)}
                        />
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
