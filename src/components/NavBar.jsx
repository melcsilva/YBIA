import { useState } from 'react'
import logoYBIA from '../assets/whitelogo.png'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'

export default function NavBar() {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[var(--color-softblack)]/20 backdrop-blur-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div className='flex items-center space-x-1 group cursor-pointer'>
                    <div>
                        <img src={logoYBIA} alt="Ybia" className="w-6 h-6 sm:w-40 sm:h-18"
                        />
                    </div>
                </div> 

                {/* Nav Links */}
                <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                    <a 
                    	href='#features' className='text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] text-sm lg:text-base'
											>
												Serviços
										</a>
                    <a 
											href='#pricing' className='text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] text-sm lg:text-base'
											>
												Planos
										</a>
                    <a 
											href='#testimonials' className='text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] text-sm lg:text-base'
											>
												Depoimentos
										</a>
                </div>

								<button className='md:hidden p-2 text-[var(--color-offwhitec)] hover:text-[var(--color-gold)]' onClick={() => setMobileMenuIsOpen((prev) => !prev)}
									>
										{mobileMenuIsOpen ? (
											<X className="w-5 h-5 sm:h-6" />
										) : (
											<Menu className="w-5 h-5 sm:h-6" />
										)
										}
								</button>

            </div>
        </div>

				{mobileMenuIsOpen && (
				<div className='md:hidden bg-[var(--color-softblack)]/95 backdrop-blur-lg border-t border-[var(--color-gold)] animate-in slide-in-from-top duration-500'>
					<div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
						<a 
              href='#features'
							onClick={() => setMobileMenuIsOpen(false)} 
							className='block text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] text-sm lg:text-base'
						>
							Serviços
						</a>
            <a 
							href='#pricing' 
							onClick={() => setMobileMenuIsOpen(false)}
							className='block text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] text-sm lg:text-base'
						>
							Planos
						</a>
            <a 
							href='#testimonials'
							onClick={() => setMobileMenuIsOpen(false)}
							className='block text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] text-sm lg:text-base'
						>
							Depoimentos
						</a>
					</div>
				</div>
			)}
    </nav>
}