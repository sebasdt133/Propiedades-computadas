const app1 = {
    data() {
      return {
        contactos:[],
        nuevoNombre:'',
        nuevoTelefono:'',
        nuevaCategoria:'Familiar'
      };
    },
    computed:{
      totalLlamadas() {
        let total=0;
        for(let i=0;i<this.contactos.length;i++) {
          total+=this.contactos[i].llamadas;
        }
        return total;
      },
      totalMensajes() {
        let total=0;
        for (let i= 0;i<this.contactos.length;i++){
          total+=this.contactos[i].mensajes;
        }
        return total;
      }
    },
    methods:{
      agregarContacto(){
        if (this.nuevoNombre && this.nuevoTelefono) {
          this.contactos.push({
            nombre:this.nuevoNombre,
            telefono:this.nuevoTelefono,
            categoria:this.nuevaCategoria,
            llamadas:0,
            mensajes:0
          });
          this.nuevoNombre='';
          this.nuevoTelefono='';
          this.nuevaCategoria='Familiar';
        } else {
          alert('Por favor, ingrese nombre y teléfono');
        }
      },
      eliminarContacto(index) {
          this.contactos.splice(index,1);
        }
      }
    };
Vue.createApp(app1).mount('#seccion');