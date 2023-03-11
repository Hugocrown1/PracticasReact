import React,{useEffect, useState} from 'react'



export const Formulario = ({estudiantes, setEstudiantes, estudiante, setEstudiante}) => {

  

  const [nombre,setNombre] = useState('');
  const [carrera,setCarrera] = useState('');
  const [semestre,setSemestre] = useState('');
  const [promedio,setPromedio] = useState('');

  useEffect(() => {

    if(Object.keys(estudiante).length > 0){
      
    setNombre(estudiante.nombre)
    setCarrera(estudiante.carrera)
    setSemestre(estudiante.semestre)
    setPromedio(estudiante.promedio)
    }
  }, [estudiante])

  useEffect(() => {

    if(Object.keys(estudiante).length > 0){
      
    setNombre(estudiante.nombre)
    setCarrera(estudiante.carrera)
    setSemestre(estudiante.semestre)
    setPromedio(estudiante.promedio)
    }
  }, [estudiante])
  

 


  const generarID = () =>{
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return random + fecha;
  }


  

  const [error, setError] = useState(false);

  const manejadorSubmit = (e)=>{
    
    e.preventDefault();
    
    if([nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('')){
      
      console.log('Escriba algo porfavor y gracias');
      setError(true);
      return;
    } 
    setError(false);

    const objetoEstudiante={
      
      nombre,
      carrera,
      semestre,
      promedio
   
     }
     

     if(estudiante.id){
     
      objetoEstudiante.id = estudiante.id;
     
      const estudiantesActualizados = estudiantes.map(estudianteState => estudianteState.id === estudiante.id ? objetoEstudiante : estudianteState )
      setEstudiantes(estudiantesActualizados)
      setEstudiante({});
      
      
      
     } else{
      objetoEstudiante.id = generarID()
      setEstudiantes([...estudiantes,objetoEstudiante])
      console.log('registro nuevo')
     }
   
    
     limpiar();

    
  }

  const limpiar = ()=>{
    setNombre('');
    setCarrera('');
    setSemestre('');
    setPromedio('');
  }

  return ( 

    <div className='p-[20px] md:w-1/2  bg-[#333333] rounded-md'>
        <h1 className='font-bold text-center text-2xl text-white '>Registro de estudiantes</h1>
        <form 
        onSubmit={manejadorSubmit}
        >

            {error && (<div class="bg-orange-100 border-l-4 py-1 mt-2 border-red-500 text-orange-700 p-4" role="alert">
                        <p class="font-bold">Error</p>
                        <p>Favor de llenar todos los campos</p>
                                </div>)}

            <div>

            <label className='block text-white' htmlFor="">Nombre Estudiante</label>
            <input className='border-2 w-full p-1 mb-2 mt-2 rounded-md'value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text"placeholder='Nombre completo' />

            <label className='block text-white' htmlFor="">Carrera</label>
            <input className='border-2 w-full p-1 mb-2 rounded-md'value={carrera} onChange={(e)=> setCarrera(e.target.value)} type="text"placeholder='Carrera' />

            <label className='block text-white' htmlFor="">Semestre</label>
            <input className='border-2 w-full p-1 mb-2 rounded-md' value={semestre} onChange={(e)=> setSemestre(e.target.value)} type="text"placeholder='Semestre' />

            <label className='block text-white' htmlFor="">Promedio</label>
            <input className='border-2 w-full p-1 mb-2 rounded-md' value={promedio} onChange={(e)=> setPromedio(e.target.value)} type="text"placeholder='Promedio' />
            
            </div>
            <div>
              <input className='bg-[#14080E] w-full rounded-md p-2 uppercase hover:bg-[#472335] text-[#dcdcdc]' type="submit" value={estudiante.id ? 'Actualizar estudiante' : 'Agregar estudiante'} />
            </div>
            
        </form>
        
        </div>
  )
}
