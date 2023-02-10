import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return this.prismaService.orders.create({
      data: {
        email: createOrderDto.email,
        country: createOrderDto.country,
        residence: createOrderDto.residence,
        postalCode: createOrderDto.postalCode,
        phoneNumber: createOrderDto.phoneNumber,
        detailsToOrder: createOrderDto.detailsToOrder,
        price: createOrderDto.price,
      },
    });
  }

  findAll() {
    return this.prismaService.orders.findMany({});
  }

  async findOne(id: number) {
    //todo check  it below
    // if (!order) throw new NotFoundException('Order Not Found');
    return await this.prismaService.orders.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    const order = this.findOne(id);
    await this.prismaService.orders.delete({
      where: {
        id: id,
      },
    });
  }
}
