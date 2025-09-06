import { create } from 'zustand'

export const useWalletStore = create((set) => ({
    address: null,
    chainId: null,
    setAddress: (address) => set({ address }),
    setChainId: (chainId) => set({ chainId }),
}))

export async function connectMetaMask() {
    const { ethereum } = window
    if (!ethereum) {
        alert('MetaMask not found. Please install the extension.')
        return
    }
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        useWalletStore.getState().setAddress(accounts?.[0] ?? null)
        const chainId = await ethereum.request({ method: 'eth_chainId' })
        useWalletStore.getState().setChainId(chainId)
        ethereum.removeListener?.('accountsChanged', handleAccountsChanged)
        ethereum.on?.('accountsChanged', handleAccountsChanged)
    } catch (err) {
        console.error(err)
    }
}

function handleAccountsChanged(accounts) {
    useWalletStore.getState().setAddress(accounts?.[0] ?? null)
}


