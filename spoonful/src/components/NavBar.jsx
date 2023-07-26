import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { auth } from '../Firebase';


const navigation = [
  { name: 'My Recipes', href: '#', current: true }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const handleGoogleSignIn = async () => {
  try {
    // Use Firebase Auth to sign in with Google
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    // After successful sign-in, you can store the user's data in Firestore
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
};

const GoogleIcon = () => (
  <i className="material-icons text-white">google</i>
);


export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-screen">
      {({ open }) => (
        <>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
          </head>
          <div className="w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="font-burtons text-xl text-white shadow-lg">devbyjc</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

          <div className="absolute inset-y-0 right-4 flex items-center pr-2">
                {/* Add the Google sign-in button */}
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center rounded-md bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 text-sm font-medium"
                >
                  Sign in With Google
                </button>
              </div>
        </>
      )}
    </Disclosure>
  );
}

