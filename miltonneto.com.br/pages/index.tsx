import styles from '../styles/css/Home.module.css'

export default function Home() {
  
function toggleTheme(e) {
    const container = document.querySelector("#appBody");
    if (e.target.checked) {
        container.classList.add("dark");
    } else {
        container.classList.remove("dark");
    }
    }
  
  
  return (
    
        <div id="appBody">
            <main className={styles.main}>
                <input
                className="peer hidden"
                type="checkbox"
                id="check"
                onChange={ e => toggleTheme(e)}
                />
                <label
                className={`
                relative bg-zinc-500 flex items-center p-1 
                transition-all cursor-pointer w-14 h-7 
                rounded-full peer-checked:bg-zinc-200 
                peer-checked:justify-end
            `}
                htmlFor="check"
                >
                <span
                    className={`
                h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-500
                `}
                ></span>
                </label>
            
            <p className='Lorem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                reiciendis delectus similique placeat odit doloremque sequi
                voluptatem consequatur. Alias minus voluptates ipsa dolore libero
                error nihil, temporibus quos maiores consectetur?
            </p>    
            </main>
        </div>

  )
}
