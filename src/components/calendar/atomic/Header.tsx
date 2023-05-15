import { Flex, Grid, retriever } from "@retriever-ui/react";
{/*Precisa importar os ActionButtons*/}

const Header = () => {

    {/*Estilização da coluna horizontal*/}
    <Flex alignItems="center" justifyContent="space-between" gap={12}></Flex>

{/*Incluir o botão preview*/}

    {/*Incluir a lógica para mostrar template só com meses do ano, e só com o templete dos dias do mês*/}
        {showMonths ? (
        //Mostra só o ano no TEMPLATE MESES
        <retriever.div>{dateUtils.format(date, "yyyy")}</retriever.div>
      
        ) : (
          //Mostra o mês e o ano no TEMPLATE DIAS
        <retriever.div data-testid="month-test-id" onClick={openMonths}>
          {dateUtils.format(date, "MMMM - yyyy")}
        </retriever.div>
      )
        }
    }//Incluir o botão next
}
export default Header;