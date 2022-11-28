<?php

namespace ContainerNkvlNtU;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder5e34d = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer47cce = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesab5a5 = [
        
    ];

    public function getConnection()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getConnection', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getMetadataFactory', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getExpressionBuilder', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'beginTransaction', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getCache', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getCache();
    }

    public function transactional($func)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'transactional', array('func' => $func), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'wrapInTransaction', array('func' => $func), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'commit', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->commit();
    }

    public function rollback()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'rollback', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getClassMetadata', array('className' => $className), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'createQuery', array('dql' => $dql), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'createNamedQuery', array('name' => $name), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'createQueryBuilder', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'flush', array('entity' => $entity), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'clear', array('entityName' => $entityName), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->clear($entityName);
    }

    public function close()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'close', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->close();
    }

    public function persist($entity)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'persist', array('entity' => $entity), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'remove', array('entity' => $entity), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'refresh', array('entity' => $entity), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'detach', array('entity' => $entity), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'merge', array('entity' => $entity), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getRepository', array('entityName' => $entityName), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'contains', array('entity' => $entity), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getEventManager', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getConfiguration', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'isOpen', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getUnitOfWork', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getProxyFactory', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'initializeObject', array('obj' => $obj), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'getFilters', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'isFiltersStateClean', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'hasFilters', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return $this->valueHolder5e34d->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer47cce = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config)
    {
        static $reflection;

        if (! $this->valueHolder5e34d) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder5e34d = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder5e34d->__construct($conn, $config);
    }

    public function & __get($name)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, '__get', ['name' => $name], $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        if (isset(self::$publicPropertiesab5a5[$name])) {
            return $this->valueHolder5e34d->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5e34d;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder5e34d;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5e34d;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder5e34d;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, '__isset', array('name' => $name), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5e34d;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder5e34d;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, '__unset', array('name' => $name), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5e34d;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder5e34d;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, '__clone', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        $this->valueHolder5e34d = clone $this->valueHolder5e34d;
    }

    public function __sleep()
    {
        $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, '__sleep', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;

        return array('valueHolder5e34d');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer47cce = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer47cce;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer47cce && ($this->initializer47cce->__invoke($valueHolder5e34d, $this, 'initializeProxy', array(), $this->initializer47cce) || 1) && $this->valueHolder5e34d = $valueHolder5e34d;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder5e34d;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder5e34d;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
