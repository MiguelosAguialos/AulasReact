export function Chat(){
    // npm install -D tailwindcss postcss autoprefixer
    // npx tailwindcss init -p
    // "./index.html", "./src/**/*.{js,ts,jsx,tsx}", -> dentro do content
    // @tailwind base;@tailwind components;@tailwind utilities; -> no index.css
    // Colocar as classes e rodar o projeto

    
    return (
        <div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 m-10">
            <div className="shrink-0">
                <img className="h-12 w-12 hover:animate-scale " src="https://github.com/MiguelosAguialos.png" alt="ChitChat Logo"/>
            </div>
            <div className="justify-content align-items">
                <div className="text-xl font-medium text-black">Notificação</div>
                <p className="text-slate-500">Você possui uma nova mensagem!</p>
                <a href="https://github.com/MiguelosAguialos" target='_blanck'><button className="px-4 py-1 text-sm text-purple-600 
                font-semibold rounded-full border border-purple-200 
                hover:text-white hover:bg-purple-600 hover:border-transparent m-2 hover:scale-110 transition duration-300">Github</button></a>
            </div>
            </div>
        </div>
    )
}