import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = 'https://hbomax-images.warnermediacdn.com/images/GXdRsewUPO5uAuwEAABEI/tileburnedin?size=1280x720&partner=hbomaxcom&v=26a5badd79c2cca91aa0c86d604bfd3e&host=art-gallery.api.hbo.com&language=pt-br&w=1280';
  contentTitle:string = 'Minha Noticia';
  contentDescription:string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, accusantium. Sit vero quod in soluta quia? Ullam saepe illo reprehenderit voluptas distinctio aliquam? Dolorum aliquid nihil, eligendi culpa iusto sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus consectetur corporis maxime provident, maiores vitae esse aperiam sapiente itaque fugit repellat, illum nesciunt dicta, enim dolor autem tempora alias?'
}
