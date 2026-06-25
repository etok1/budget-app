import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

function Modal({isOpen,setIsOpen, children}) {
  return (
    <>
        <Dialog open={isOpen} onClose={() => {}} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/50" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="bg-black p-4 rounded">
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    </>
  )
}

export default Modal