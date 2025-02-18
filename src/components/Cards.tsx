import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { DollarSign, Receipt, ShoppingBag } from 'lucide-react'

const Cards = () => {
  return (
    <>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600">Vendas no mês</CardTitle>
                    <DollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Total de vendas ultimos 30 dias</CardDescription>
            </CardHeader>

            <CardContent>
                <p className="text-base sm:text-lg font-bold">R$ 10.200,00</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600">ultimos 3 meses</CardTitle>
                    <Receipt className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Total de vendas nos ultimos 90 dias</CardDescription>
            </CardHeader>

            <CardContent>
                <p className="text-base sm:text-lg font-bold">R$ 32.000,00</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600">total Pedidos no mês</CardTitle>
                    <ShoppingBag className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Total de Pedidos</CardDescription>
            </CardHeader>

            <CardContent>
                <p className="text-base sm:text-lg font-bold">1200</p>
            </CardContent>
        </Card>
    </>
  )
}

export default Cards